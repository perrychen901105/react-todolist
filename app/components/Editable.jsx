import React from 'react';

import classnames from 'classnames';

const Editable = ({editing, value, onEdit, className}) => {
    if (editing) {
        return <Editable.Edit value={value} onEdit={onEdit} className={className} />
    }

    return <Editable.Value value={value} className={className}/>;
}

Editable.Value = ({value, className, ...props}) => <span className={classnames('value', className)} {...props}>{value}</span>


// export default ({editing, value, onEdit, ...props}) => {
//     if (editing) {
//         return <Edit value={value} onEdit={onEdit} {...props} />
//     }
//     return <span {...props}>{value}</span>;
// }

// const Edit = ({onEdit = () => {}, value, ...props}) => (
//     <div onClick={onEdit} {...props}>
//         <span>edit: {value}</span>
//     </div>
// )

class Edit extends React.Component {
    render() {
        const {value, onEdit, className, ...props} = this.props;

        return <input 
            type="text"
            className={classnames('edit', className)}
            autoFoucs={true}
            defaultValue={value}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}
            {...props}
        />
    }

    checkEnter = (e) => {
        if(e.key === 'Enter') {
          this.finishEdit(e);
        }
    }
    
    finishEdit = (e) => {
        const value = e.target.value;

        if(this.props.onEdit) {
            this.props.onEdit(value);
        }
    }
}
Editable.Edit = Edit;

export default Editable;
