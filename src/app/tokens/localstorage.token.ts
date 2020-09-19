import { InjectionToken } from '@angular/core'

export const LOCAL_STORAGE = new InjectionToken<Storage>('Local storage', {
  providedIn: 'root',
  factory: () => new StorageMock(),
})

class StorageMock implements Storage {
  private readonly storage = new Map<string, string>()

  get length(): number {
    return this.storage.size
  }

  getItem(key: string): string | null {
    return this.storage.has(key) ? this.storage.get(key)! : null
  }

  setItem(key: string, value: string) {
    this.storage.set(key, value)
  }

  clear() {
    this.storage.clear()
  }

  key(index: number): string | null {
    return index < this.storage.size ? [...this.storage.keys()][index] : null
  }

  removeItem(key: string): void {
    this.storage.delete(key)
  }
}
