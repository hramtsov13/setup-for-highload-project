import { ApiClientInterface } from '@/models/api-client/ApiClient.interface';
import itemsApiClient from './items';
// Создаём экземпляр основного ApiClient, который будет обёрткой для фиктивных клиентов.
const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient,
};
// Экспортируем экземпляр.
export default apiLiveClient;
