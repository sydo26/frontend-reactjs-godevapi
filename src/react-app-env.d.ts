/// <reference types="react-scripts" />

/* eslint no-unused-vars: "off", curly: "error" */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PUBLIC_URL: string
  }
}
