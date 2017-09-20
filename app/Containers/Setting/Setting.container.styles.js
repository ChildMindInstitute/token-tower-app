import { Fonts } from '../../Resources/Fonts';

export default {
  container: {
    flex: 1
  },
  contentBlock: {
    flex: 1,
    paddingHorizontal: 30
  },
  content: {
    paddingTop: 20
  },
  title: {
    fontSize: 23,
    fontFamily: Fonts.bold
  },
  input: {
    flex: 1,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewInput: {
    flexDirection: 'row',
    paddingTop: 10
  },
  text: {
    fontFamily: Fonts.regular,
    width: 150,
    fontSize: 18,
    textAlign: 'left'
  },
  dropdownStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  dropdownTextStyle: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    textAlign: 'center'
  },
  textStyle: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: 'grey',
    padding: 10
  }

};
