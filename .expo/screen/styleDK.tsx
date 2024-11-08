import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },
  Dangnhap: {
    width: '90%', // Tự động thích ứng với nhiều loại màn hình
    backgroundColor: '#fff',
    margin: 30,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  viewnut: {
    alignItems: 'center',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 17,
    paddingRight: 10,
  },
  input: {
    flex: 3,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
  },
  radioButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#0000FF',
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
      backgroundColor: '#4CAF50', // Change this to your preferred color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF', // Text color for the button
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
  },
  footerLink: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  linkText: {
    fontSize: 16,
    marginLeft: 5,
    color: 'blue',
    fontStyle: 'italic',
  },
});

export default styles;
