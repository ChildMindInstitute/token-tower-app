import { Fonts } from '../../../Resources/Fonts';

export default {
  container: {
    flex: 1,
    width: 220,
    backgroundColor: 'rgba(247, 195, 74, 0.95)',
    paddingTop: 20
  },
  imgContainer: {
    flex: 0.1,
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center'
  },
  image: {
    margin: 3,
    width: 50,
    height: 50
  },
  userName: {
    fontSize: 20,
    flex: 0.5,
    fontFamily: Fonts.bold
  },
  menuContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10
  },
  menu: {
    flexDirection: 'row'
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: 17,
    marginLeft: 20
  },
  textContainer: {
    flex: 0.5,
    marginLeft: 10,
    justifyContent: 'center'
  }
};
