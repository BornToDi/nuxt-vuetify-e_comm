<template>
  <v-app id="inspire" class="bg-white">
    <!-- <v-system-bar>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->

    <v-app-bar>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-app-bar-title>E-commerce Website</v-app-bar-title>
    </v-app-bar>

    <!-- <v-navigation-drawer
      v-model="drawer"
      temporary
    >
   
    </v-navigation-drawer> -->

     <v-main class="bg-grey-300">
      <v-container fluid>
        <v-row>
           <v-col cols="12" md="2">
            <v-card class="py-3 pr-3 ">
              <v-text-field class="pl-3" placeholder="search product" v-model="name"></v-text-field>
              <v-radio-group v-model="sortBy">
    <template v-slot:label>
      <h3>Sort By:</h3>
    </template>
    <v-radio value="name">
      <template v-slot:label>
        <div> <strong class="text-success">Name</strong></div>
      </template>
    </v-radio>
    <v-radio value="price">
      <template v-slot:label>
        <div> <strong class="text-primary">Price</strong></div>
      </template>
    </v-radio>
  </v-radio-group>
                   <v-radio-group v-model="orderBy">
                  <template v-slot:label>
                  <h3>Shorting Order:</h3>
                  </template>
                  <v-radio value="asending">
                    <template v-slot:label>
                      <div> <strong class="text-success">asending</strong></div>
                    </template>
                  </v-radio>
                  <v-radio value="deasending">
                    <template v-slot:label>
                      <div> <strong class="text-primary">Deasending</strong></div>
                    </template>
                  </v-radio>
               </v-radio-group>
            </v-card>
           </v-col>
           <v-col col="12" md="10">
            <v-row>
              <v-col v-for="(product, i) in filteredProducts" :key="i" col="12" md="4" sm="6">
            <v-card
    class="mx-auto"
  >
    <v-img
      :src="product.image"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{ product.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ product.price}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Read more..
      </v-btn>

      
    </v-card-actions>

    
  </v-card>
           </v-col>
            </v-row>
           </v-col>
        
        </v-row>
      </v-container>
    </v-main> 
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';
  import data from './data';

  const sortBy = ref('');
  const orderBy = ref("asending");
 const products = ref(data);
 const name = ref('');

 const filteredProducts = computed(()=> {
  if (name.value) {
    return [...products.value].filter((item) => {
      return name.value.toLocaleLowerCase()
      .split(" ")
      .every((v) => item.name.toLocaleLowerCase().includes(v));
    })
  } else {
    return products.value ;
  }
 })

//  const sortProducts = (() => {
// if(orderBy.value =='deasending'){
//   products.value.sort(dynamicSort("-" + sortBy.value));
// } else {
//   products.value.sort(dynamicSort( sortBy.value))
// }
//  });
// const sortProducts = () => {
//   if (orderBy.value === 'descending') {
//     products.value.sort(dynamicSort('-' + sortBy.value));
//   } else {
//     products.value.sort(dynamicSort(sortBy.value));
//   }
// };

const sortProducts = () => {
    products.value.sort(dynamicSort(sortBy.value, orderBy.value));
  };

  const dynamicSort = (property, order) => {
  const sortOrder = order === 'deasending' ? -1 : 1;
  return (a, b) => {
    const aValue = typeof a[property] === 'string' ? a[property].toLowerCase() : a[property];
    const bValue = typeof b[property] === 'string' ? b[property].toLowerCase() : b[property];
    return (aValue < bValue ? -1 : aValue > bValue ? 1 : 0) * sortOrder;
  };
};



watch(sortBy, () =>{
  sortProducts();
})
watch(orderBy, () =>{
  sortProducts();
})
</script>

