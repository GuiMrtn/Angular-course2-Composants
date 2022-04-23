//Ici, on importe l'interface OnInit qui va nous permettre d'initialiser un component
import { Component, OnInit } from '@angular/core';
//Ici, on importe notre fichier de mock (la liste de tous nos pokemons). POKEMONS est la liste (cf la constante de notre fichier mock-pokemon-list)
import { POKEMONS } from './mock-pokemon-list';
//Ici, on importe la classe pokemon qui renverra un pokemon
import { Pokemon } from './pokemon';

//Angular a une philopophie de développement orienté composant. Un composant est un système encapsulé qui contrôle une portion de l'écran. Cette portion de l'écran contrôlée par un composant est appelé "Vue". Cela concerne pour nous le template (ligne 5 Welcome to {{ title }}), mais ça pourrait une barre de navigation, une fenêtre de chat, un tableau etc... Cette vue va être définie dans le template du @Component. C'est dans le template que va être rendu la Vue envoyée à l'utilisateur.
@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémons</h1>`    
})
//La logique de la vue va être pilotée par la classe du composant.  Ainsi un composant est constitué d'une Vue et d'une classe. La classe va être constituée de tout ce qu'il faut pour piloter la Vue. On va y retrouver des propriétés et des méthodes.
//Ici on implémente l'interface OnInit
export class AppComponent implements OnInit {
  //Ici, on déclare 3 pokemons dans un tableau

  //pokemonList = ["Bulbizarre", "Salamèche", "Carapuce"];

  //Ici on attribue à pokemonList la valeur de la constante POKEMONS (du fichier mock-pokemon-list.ts). Ici on type pokemonList en disant que nous avons un tableau de pokemons. Ici, on sera obligé de passer une liste de pokémons avec un nom, un id, une photo, des points de vie etc...
  pokemonList: Pokemon[] = POKEMONS;

  //On implémente l'interface du cycle de vie. Ensuite, il faut définir la méthode associée, ici ngOnInit. On supprime le typage de typsescript : void qui ne sert à rien
  ngOnInit() {
    //Ici, on fait un console.table() pour afficher un tableau dans la console. Ici, il ne faut pas ounlier le this. car pokemonList n'existe pas dans la scope de ngOnInit. Nous n'avons pas dans le ngOnInit de variable appelée pokemonList (elle est définie au-dessus)
    console.table(this.pokemonList);
    //On appelle notre méthode selectedPokemon à l'initialisation de la page, avant même que l'utilisateur ait cliqué sur Bulbizarre. Nous verrons apparaître le message dans la console Ne pas oublier le this. pour les raisons décrites ci-dessus.

   // this.selectedPokemon("Bulbizarre");

   //Ici, si on avait mis "Bulbizarre" comme ci-dessus, on aurait une erreur car dans la méthode, on ne recherche plus une donnée de stype string mais un objet. Ici dans la liste de pokemons, on va prendre le pokemon de la liste de pokemon définie au-dessus, et on va prendre le premier. Dans la console, on aura vous avez cliqué sur Bulbizarre.
    this.selectedPokemon(this.pokemonList[0]);
  }

  //On va déployer une petite méthode selectedPokemon qui va afficher dans la console le pokémon qui aura été cliqué par un utilisateur. Ici, on met à paramètre. Quand un pokémon aura été cliqué, on veut un pokemonName. On affichera dans la console un message pour notre utilisateur.

  // selectedPokemon(pokemonName : string){
  //   console.log(`Vous avez cliqué sur ${pokemonName}`);
    
  // }

    //Ici, on veut passer un pokemon. Le typage pokemon indique que pokemon contient bien un pokemon avec le nom, les points de vie, une photo etc... Comme pokemon est un objet, on ferra pokemon.name pour avoir son nom dans la console. En fait pour récupérer le nom d'un pokémon, je suis obligé de passer par l'interface (pokemon.ts) pour ensuite récupérer dans la liste le nom d'un pokémon (mock-pokemon-list.ts)
    selectedPokemon(pokemon : Pokemon) {
      console.log(`Vous avez cliqué sur ${pokemon.name}`);
      
    }

}

//1. On va injecter une liste de pokémon plus fournie. Pour cela on va créer une interface en ts (pokemon.ts) et on va ajouter un fichier de mock de données pour simuler une liste de 12 pokémons avec des informations (mock-pokemon-list)
//2. On modifie la méthode selected qui prendra en paramètre non pas le nom d'un pokémon mais un objet-metier qu'on va créer et qui sera un pokemon
//3. On modifie le titre de notre template