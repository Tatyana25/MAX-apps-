export interface WebApp {
  ready?: () => void;
  platform?: string;
  version?: string;
  initDataUnsafe?: {
    start_param?: string;
  };
}

export function getWebApp(): WebApp | null {

=======


  if (typeof window === 'undefined') {
    return null;
  }


=======
=======


  const webApp = (window as any).WebApp as WebApp | undefined;
  return webApp ?? null;
}

export function ready(): void {
  getWebApp()?.ready?.();
}

export function getStartParam(): string | null {
  return getWebApp()?.initDataUnsafe?.start_param ?? null;
}

export function getPlatformInfo(): { platform?: string; version?: string } {
  const webApp = getWebApp();

  if (!webApp) {
    return {};
  }

  return {
    platform: webApp.platform,
    version: webApp.version
  };
}
