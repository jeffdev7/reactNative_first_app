import  React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, Image} from 'react-native';

export default function App() {
  const [size, setSize] = useState(20)
  const [viewHeight, setViewHeight] = useState(0)
  const [textHeight, setTextHeight] = useState(0)

  useEffect(() => {
    if (textHeight > viewHeight) {
      setSize(size - 1) 
    }
  }, [textHeight])

  return (
<View style={styles.container}>
  <Text style={styles.title}> Livros lidos de Stephen King</Text>

    <FlatList 
    data={DadosLivros}
    keyExtractor={(item) =>{item.uid.toString()}}
    renderItem ={({item}) =>

      <View style={styles.box}>

      <View>
        <Image resizeMode={'contain'} style={styles.img} source={{uri:item.img}} />
      </View>
        <View>
            <Text style={styles.livro}> {item.livro}</Text>
            <Text> {item.ano}</Text>
            
            <View style={{
          margin: 0,
          width: 290,
          height: 80
        }}
        onLayout={(event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          setViewHeight(height)
        }}
      >
            <Text  style={{
            fontSize: 15,
          }}
          onLayout={(event) => {
            var { x, y, width, height } = event.nativeEvent.layout;
            setTextHeight(height)
          }}> {item.sinopse} </Text>
          </View>
        </View>

    </View>
  }
    />

</View>
 
  );
}

const DadosLivros = [
  {
    uid: 1,
    livro: 'It',
    ano: '1986',
    sinopse: 'Uma entidade aterroriza a pequena cidade de Derry a cada 27 anos.',
    img:
      'https://upload.wikimedia.org/wikipedia/en/7/78/It_%28Stephen_King_novel_-_cover_art%29.jpg'
  },
  {
    uid: 2,
    livro: 'The Stand',
    ano: '1978',
    sinopse: 'Um vírus dizimou 99% da população mundial. Agora, os sobreviventes devem ser unir para enfrentar o Mal.',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg',
  },
  {
    uid: 3,
    livro: 'The Shining',
    ano: '1977',
    sinopse: 'Jack leva sua família para passar o inverno em um hotel. E ficaram confinados durante toda estação.',
    img: 'https://hachette.imgix.net/books/9781473695498.jpg?auto=compress,format',
  },
  {
    uid: 4,
    livro: 'Misery',
    ano: '1992',
    sinopse: 'Uma enfermeira fã de um escritor o salva de um acidente, porém o obriga a escrever para ela.',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91pzqqwsg5L.jpg',
  },
  {
    uid: 5,
    livro: 'Salems lot',
    ano: '1975',
    sinopse: 'Uma cidade infestada de vampiros.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81zqDem9OvL.jpg',
  },
  {
    uid: 6,
    filme: 'Pet Sematary',
    ano: '1989',
    sinopse: 'O que(m) está morto devem permanecer morto.',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/StephenKingPetSematary.jpg/220px-StephenKingPetSematary.jpg',
  },
{
    uid: 7,
    livro: '11/25/63',
    ano: '2011',
    sinopse: 'Viagem ao todo para prevenir o assassinato de JF Kennedy.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81R-ADdDatL.jpg',
  },
{
    uid: 8,
    livro: 'Doctor Sleep',
    ano: '2013',
    sinopse: 'Continuação de Shining com Danny, filho de Jack.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81r4acWAaCL.jpg',
  },
{
    uid: 9,
    livro: 'The Green Mile',
    ano: '1996',
    sinopse: 'Um negro gigante condenado a morte por matar e estuprar duas garotas, porém ele é inocente e só foi condenado por causa da cor de sua pele. ',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81uQocUlNcL.jpg',
  },
{
    uid: 10,
    livro: 'On writing',
    ano: '2000',
    sinopse: 'Autobiografia de Stephen King e conselhos para autores aspirantes.',
    img: 'https://4.bp.blogspot.com/-jqVOr884mFk/WPoLvles4DI/AAAAAAAAAPI/oPGrGrxcT9E4hnRS4EfWPy4q1y7Iz_tngCLcB/s1600/SOBRE%2BA%2BESCRITA.png',
  },
{
    uid: 11,
    livro: 'Joyland',
    ano: '2013',
    sinopse: 'Um jovem que vai trabalhar em um parque de diversões e se torna investigador de crimes que acontecem no parque.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/516vFN5eVSL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
  },
{
    uid: 12,
    livro: 'Firestarter',
    ano: '1980',
    sinopse: 'Uma família passa por experimentos, agora os pesquisadores querem somente Charlie, após matarem sua mãe, Andy foge com ela.',
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1450650071l/28254279._SY475_.jpg',
  },
{
    uid: 13,
    livro: 'Geralds game',
    ano: '1992',
    sinopse: 'Uma mulher, três personalidades presa na cama ao lado do marido morto.',
    img: 'https://m.media-amazon.com/images/I/51Zo9V0ZC2L.jpg',
  },



];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    marginTop:10,
    backgroundColor: '#FF4848',
    marginRight:0,
   
  },
  img:{
    width:100,
    height:150
  },
  livro:{
    fontWeight:'bold'

  },
  box:{
    flexDirection:'row',
    width:390,
    height:150,
    marginVertical:10,
    backgroundColor:'#FF0000',
    borderRadius:5,
    marginHorizontal:5
  },
   title:{
    fontWeight:"bold",
    textAlign:'center',
    fontSize:20,
    marginVertical:20,
    marginTop:30
   
  },
  sinopse:{
    
    
  }
 
});
