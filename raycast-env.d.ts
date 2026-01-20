/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Cloudflare API Token - Your Cloudflare API token with Cache Purge permissions */
  "apiToken": string,
  /** Default Zone ID (Optional) - Default zone ID for quick purge operations */
  "defaultZoneId"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `purge-all` command */
  export type PurgeAll = ExtensionPreferences & {}
  /** Preferences accessible in the `purge-urls` command */
  export type PurgeUrls = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-purge` command */
  export type QuickPurge = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `purge-all` command */
  export type PurgeAll = {}
  /** Arguments passed to the `purge-urls` command */
  export type PurgeUrls = {}
  /** Arguments passed to the `quick-purge` command */
  export type QuickPurge = {}
}

