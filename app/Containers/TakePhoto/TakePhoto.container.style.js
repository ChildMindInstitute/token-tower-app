export default {
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  images: {
    flex: 1,
    width: null,
    height: null
  },
  oval: {
    borderWidth: 4,
    height: 220,
    width: 220,
    borderRadius: 110,
    borderColor: '#f7c34a',
    transform: [
      { scaleY: 1.5 }
    ]
  },
  ovalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  flip: {
    margin: 15,
    flex: 0.5
  },
  cameraView: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  cameraLogo: {
    flex: 1,
    height: 70
  },
  dock: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

};
