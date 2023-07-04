// Set the typing of your environment variables here 👇
type MyVariables = {
   NEXT_PUBLIC_API_URL: string
}

declare global {
   namespace NodeJS {
      interface ProcessEnv extends MyVariables {}
   }
}

export {}
