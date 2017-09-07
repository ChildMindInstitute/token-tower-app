export default {
  textBubble: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#f7c34a',
    height: 300,
    width: 300,
    borderRadius: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    width: 200,
    padding: 10
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    height: 100
  },
  img: {
    flex: 1,
    flexDirection: 'row',
    top: 20
  },
  present: {
    flex: 0.5,
    position: 'relative',
    zIndex: 0,
    left: -50
  },
  treasure: {
    flex: 1,
    zIndex: 1,
    position: 'relative',
    left: 10
  }
};
