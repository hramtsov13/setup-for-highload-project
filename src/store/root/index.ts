import { createStore, StoreOptions } from 'vuex';
import { initialRootState } from './initialState';
import {
  RootStateInterface,
  RootStoreInterface,
  RootStoreModel,
  StoreModuleNames,
  MutationType,
  ItemsStateInterface,
  LocalesStateInterface,
} from '@/models/store';
// Импортируем каждый Vuex-модуль.
import { itemsState } from '@/store/items/module';
import { localesState } from '@/store/locales/module';
// Опции хранилища Vuex для создания модульного хранилища с пространством имён
const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,
  modules: {
    itemsState,
    localesState,
    // Новые дополнительные модули добавляйте сюда, по аналогии с itemsState.
  },
};

export const rootStore: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions);

export function dispatchModuleAction<T>(moduleName: string, actionName: string, params?: T): void {
  rootStore.dispatch(`${moduleName}/${actionName}`, params);
}
