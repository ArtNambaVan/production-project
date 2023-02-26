
type Mods = Record<string, boolean | string>

export function classNames (cls?: string | undefined, mods: Mods = {}, additional: Array<string | undefined> = []): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)

  ].join(' ')
}

classNames('test', { kek: true })
