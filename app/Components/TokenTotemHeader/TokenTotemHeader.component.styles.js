import { Fonts } from '../../Resources/Fonts';

export default {
  containerVertical: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50
  },
  imgContainer: {
    flex: 1
  },
  text: {
    fontFamily: Fonts.bold,
    fontSize: 40
  },
  image: {
    height: 190,
    width: 190
  },
  imageHorizontal: {
    flex: 1,
    width: null,
    height: null
  }
};
