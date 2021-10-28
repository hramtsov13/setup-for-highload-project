<template>
  <div class="home">
    <ItemsListComponent
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useItemsStore } from "@/store/items";
import { MutationType, StoreModuleNames } from "@/models/store";
import ItemsListComponent from "@/components/items/ItemsList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";

export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponent,
  },
  setup() {
    const itemsStore = useItemsStore();
    itemsStore.action(MutationType.items.loadItems);

    const items = computed(() => {
      return itemsStore.state.items;
    });
    const loading = computed(() => {
      return itemsStore.state.loading;
    });

    const onSelectItem = (item: ItemInterface) => {
      itemsStore.action(MutationType.items.selectItem, {
        id: item.id,
        selected: !item.selected,
      });
    };

    return {
      items,
      loading,
      onSelectItem,
    };
  },
});
</script>
