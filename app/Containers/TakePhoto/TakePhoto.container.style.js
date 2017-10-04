export default {
  container: {
    flex: 1,
    paddingHorizontal: 30
  },
  images: {
    flex: 1,
    height: null,
    width: null
  },
  oval: {
    borderWidth: 4,
    height: 160,
    width: 160,
    borderRadius: 130,
    borderColor: '#f7c34a',
    transform: [
      { scaleY: 1.4 }
    ]
  },
  ovalContainer: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: -5
  },
  flip: {
    flex: 1
  },
  cameraView: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  cameraLogo: {
    flex: 1,
    height: 55
  },
  dock: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgContainer: {
    height: 40
  },
  blank: {
    flex: 0.3
  },
  logoPickImg: {
    flex: 1,
    alignItems: 'flex-end'
  }
};
