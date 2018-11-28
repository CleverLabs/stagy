declare module 'rails-ujs' {
  namespace Rails {
    export function start (): void
    export function csrfParam (): string | null
    export function csrfToken (): string | null
  }

  export = Rails
}
