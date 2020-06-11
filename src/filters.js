import Vue from 'vue'

Vue.filter('toLower', function(value) {
    let minus = value.toLowerCase()
    return minus.charAt(0).toUpperCase() + minus.slice(1);
})

Vue.filter('pasarPrimerLetraMayus', function(value) {
    return value.charAt(0).toUpperCase() + value.substr(1)
})

Vue.filter('pasarMinuscula', function(value) {
    return value.toLowerCase()
})