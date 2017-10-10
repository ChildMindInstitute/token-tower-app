import { Fonts } from '../../../Resources/Fonts';

export default {
  container: {
    flex: 1,
    width: 220,
    backgroundColor: 'rgba(247, 195, 74, 0.95)',
    paddingTop: 20
  },
  imgContainer: {
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
    flex: 1,
    fontSize: 20,
    fontFamily: Fonts.bold,
    marginLeft: 10
  },
  menuContainer: {
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
  }
};
