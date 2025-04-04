export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLenght(content: string): boolean {
    return content.length >= 5 && content.length <= 800
  }

  constructor(content: string) {

    const isContentLenghtValue = this.validateContentLenght(content)

    if (!isContentLenghtValue) {
      throw new Error("Content lenght error.")
    }

    this.content = content;
  }
}