// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  twitch: {
    clientId: 'hz68z9n2pd4elyu94764kd4t7rll1j',
    secret: 'ky5udnyc8hsygz1k1qz6ffpfarrgto'
  },
  discord: {
    clientId: '614203205454397480',
    secret: 'GBHndYWyVEA5mtF3hAyZ9dhPDn8Pnxxw'
  },
  googleDocs: {
    url: 'https://spreadsheets.google.com/feeds/list/1jJELonpbu44Jr9y_1YTkZnTLsyLgHOlM8INBIUkUJPo/od6/public/full?alt=json'
  },
  pvs: {
    url: './assets/pvs.json'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
