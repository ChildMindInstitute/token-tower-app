import { Fonts } from '../../Resources/Fonts';

export default {
  container: {
    flex: 1
  },
  containerBlock: {
    flexDirection: 'row',
    marginVertical: 10
  },
  inputBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 0.9,
    borderWidth: 1,
    height: 40
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    marginHorizontal: 10
  },
  img: {
    flex: 0.4,
    width: null,
    height: null
  },
  inputContainer: {
    flex: 1
  }
};
