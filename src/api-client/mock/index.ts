import { ApiClientInterface } from '@/models/api-client/ApiClient.interface';
import itemsApiClient from './items';
// Создаём экземпляр основного ApiClient, который будет обёрткой для фиктивных клиен
const apiMockClient: ApiClientInterface = {
  items: itemsApiClient,
};
// Экспортируем экземпляр.
export default apiMockClient;
