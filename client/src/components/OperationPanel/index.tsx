import { OperationInterface } from "../../store/reducers/OperationsListReducer";

import './styles.sass'

export const OperationPanel = (props: {data: OperationInterface}) => (
    <div
        className="operation-panel-wrapper"
    >  

        <div className="operation-panel-wrapper__line" style={{background: props.data.color}} />

        <div
            className="operation-panel-wrapper__left-side"
        >
            <span
                className="operation-panel-wrapper__left-side__title"
            >
                {
                    props.data.category
                }
            </span>
            <span
                className="operation-panel-wrapper__left-side__date"
            >
                {
                    props.data.date
                }
            </span>
        </div>

        <div
            className="operation-panel-wrapper__value"
        >
            {props.data.type} {props.data.value} ₽
        </div>
    </div>
)