<template >
  <section class="src-components-http">
    <div class="jumbotron mt-3">
      <table class="table">
        <tr class="bg-success text-white">
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Direccion</th>
          <th>Mail</th>
          <th>Telefono</th>
        </tr>

        <tr
          class="bg-info text-white"
          v-for="(usuario,index) in this.$store.state.usuarios"
          :key="index"
        >
          <td>{{index+1}}</td>
          <td>{{ usuario.nombre | toLower | pasarPrimerLetraMayus}}</td>
          <td>{{ usuario.apellido | toLower | pasarPrimerLetraMayus}}</td>
          <td>{{ usuario.edad }}</td>
          <td>{{ usuario.direccion}}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.telefono }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script lang="js">

import { urlPosts } from '../urls'

  export default  {
    name: 'src-components-http',
    props: [],
    mounted () {
      this.getUsuarios()
    },
    data () {
      return {
      }
    },
    methods: {
      getUsuarios(){
        this.axios.get(urlPosts)
          .then( res => {
            this.$store.dispatch('getUsuarios', res.data)
          })
          .catch(error => {
            console.log('ERROR GET HTTP', error)
          })
         
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-http {
}
</style>
