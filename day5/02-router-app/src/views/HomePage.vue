<template>
     <div class="card p-2">
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'NewBookmark' })">+ Yeni Ekle</button>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">URL</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bookmark, index) in bookmarkList" :key="bookmark.id">
          <td>{{ index + 1 }}</td>
          <td>{{ bookmark.title }}</td>
          <td>
            <a :href="bookmark.url" target="_blank"> {{ bookmark.url }} </a>
          </td>
          <td>
            {{ bookmark.description }}
          </td>
          <td>
            <button @click="deleteBookmark(bookmark)" class="btn btn-sm btn-danger">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
    data() {
        return {
            bookmarkList: []
        };
    },
    created(){
        this.$appAxios.get('/bookmarks').then(response => {
            this.bookmarkList = response.data;
        });
    },
    methods:{
        deleteBookmark(bookmark){
            this.$appAxios.delete('/bookmarks/' + bookmark.id).then(response => {
                console.log(response);
                this.bookmarkList = this.bookmarkList.filter(item => item.id !== bookmark.id);
            });
        }
    }
}
</script>