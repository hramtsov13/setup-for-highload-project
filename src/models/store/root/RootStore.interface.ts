import { ItemsStateInterface } from '../items/ItemsState.interface';
import { LocalesStateInterface } from '../locales/LocalesState.interface';

/**
 * @name RootStoreInterface
 * @description
 * Обёртка для каждого интерфейса модуля хранилища
 */
export interface RootStoreInterface {
  itemsState: ItemsStateInterface;
  localesState: LocalesStateInterface;
}
