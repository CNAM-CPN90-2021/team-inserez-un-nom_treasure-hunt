import { Plugins } from "@capacitor/core";
import { isPlatform } from "@ionic/react";
import { useEffect } from "react";

async function didUserGrantPermission() {
  const { BarcodeScanner } = Plugins;
  // check if user already granted permission
  const status = await BarcodeScanner.checkPermission({ force: false });

  if (status.granted) {
    // user granted permission
    return true;
  }

  if (status.denied) {
    // user denied permission
    return false;
  }

  if (status.asked) {
    // system requested the user for permission during this call
    // only possible when force set to true
  }

  if (status.neverAsked) {
    // user has not been requested this permission before
    // it is advised to show the user some sort of prompt
    // this way you will not waste your only chance to ask for the permission
    const c = window.confirm(
      "We need your permission to use your camera to be able to scan barcodes"
    );
    if (!c) {
      return false;
    }
  }

  if (status.restricted || status.unknown) {
    // ios only
    // probably means the permission has been denied
    return false;
  }

  // user has not denied permission
  // but the user also has not yet granted the permission
  // so request it
  const statusRequest = await BarcodeScanner.checkPermission({ force: true });

  if (statusRequest.asked) {
    // system requested the user for permission during this call
    // only possible when force set to true
  }

  if (statusRequest.granted) {
    // the user did grant the permission now
    return true;
  }

  // user did not grant the permission, so he must have declined the request
  return false;
}

function prepare() {
  if (!isPlatform("hybrid")) {
    return;
  }

  const { BarcodeScanner } = Plugins;
  BarcodeScanner.prepare();
}

async function startScan() {
  const { BarcodeScanner } = Plugins;

  const granted = await didUserGrantPermission();
  if (!granted) {
    window.alert(
      "Merci d'autoriser l'accès à la caméra pour scanner des qr codes"
    );
    return { hasContent: false };
  }

  BarcodeScanner.hideBackground(); // make background of WebView transparent
  const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
  return result;
}

function stopScan() {
  if (!isPlatform("hybrid")) {
    return;
  }

  const { BarcodeScanner } = Plugins;
  BarcodeScanner.showBackground();
  BarcodeScanner.stopScan();
}

export function useQRCodeScanner() {
  useEffect(() => {
    prepare();

    return function onUnmount() {
      stopScan();
    };
  });

  return {
    startScan,
    stopScan,
  };
}
