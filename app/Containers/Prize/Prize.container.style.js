import EStyleSheet from 'react-native-extended-stylesheet';
import { Fonts } from '../../Resources/Fonts';

export default EStyleSheet.create({
  _containerContent: {
    flex: 1,
    paddingHorizontal: 30
  },
  _container: {
    flex: 1
  },
  _containerBlock: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 60
  },
  _inputBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10

  },
  _input: {
    flex: 1,
    borderWidth: 1,
    padding: 5
  },
  _text: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    marginHorizontal: 10
  },
  _img: {
    flex: 0.2,
    width: null,
    height: null
  },
  _inputContainer: {
    flex: 0.9,
    paddingRight: 10
  },
  _token: {
    flex: 0.2
  },
  _btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  _btn: {
    backgroundColor: '#23a02f',
    marginVertical: 10
  },
  _textBtn: {
    color: 'white',
    fontFamily: Fonts.bold,
    padding: 15
  },
  _images: {
    height: 60,
    width: 110
  }
});
