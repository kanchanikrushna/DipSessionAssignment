export class CustomeException extends Error {  
    constructor (public message: string, public statusCode: number = 400 ) {
      super(message)
  
      this.name = "Custom Exception"
    }
  }