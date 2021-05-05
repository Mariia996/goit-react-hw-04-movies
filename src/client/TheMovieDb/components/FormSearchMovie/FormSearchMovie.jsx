import React, { Component } from 'react';

import { fields } from './fields';

import styles from './FormSearchMovie.module.css';

class FormSearchMovie extends Component {
    state = {
        query: ""
    }

    handleChange = ({target}) => {
        const { name, value } = target;
         this.setState({
            [name]: value
         })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { query } = this.state;
        const { onSubmit } = this.props;
        onSubmit({ query })
    }

    reset() {
        this.setState({
            query: "",
        })
    }

    render() {
        const { query } = this.state;
        const { handleChange, onSubmit } = this;

        return (
            <form onSubmit={onSubmit} className={styles.formField}>
                <input
                    type={fields.type}
                    name="query"
                    value={query}
                    onChange={handleChange}
                    className={styles.inputField}
                    autoComplete={fields.autocomplete}
                    autoFocus
                    placeholder={fields.placeholder}/>
                <button type="submit" className={styles.btn}>Search</button>
            </form>
        )
    }
}

export default FormSearchMovie;