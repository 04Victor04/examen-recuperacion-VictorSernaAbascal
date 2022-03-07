import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import uuid from 'react-uuid';

class SelectLang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Idiomas: [],
      idioma: '',
      Selected: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {fetch('https://v2.jokeapi.dev/languages')
  .then((response) => response.json())
  .then((data) =>
    this.setState({
      Idiomas: data.jokeLanguages,
    })
  );
  }

  handleChange(e) {
    this.setState({ Selected: e.target.value });
  }

  render() {
    {this.state.Idiomas.map((item) => {
      return (
        <Form>
          <fieldset>
            <Form.Group className="mb-3">
              <select onChange={this.handleChange}>
                {this.state.Idiomas.map((item) => {
                  return <option value={item.idioma}>{item}</option>;
                })}
              </select>
            </Form.Group>
            <Button onClick={() => this.eventoclick()}>Cambiar idioma</Button>
          </fieldset>
        </Form>
      );
    })}
}
}

export default SelectLang;