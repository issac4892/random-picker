import React, {Fragment} from 'react';
import './style.css'

import {ButtonTypes, ButtonSizes} from "./buttonTypes";

import Button from "./Button";

class After extends React.Component {
    state = {
        currentIndex: 0,
        hasStarted: false,
    }
    onClick = async () => {
        const arr = [];
        this.props.change(0)
        this.props.changearr(arr)
        this.props.done()
    }
    pick = async () => {
        if (this.state.hasStarted === false) {
            this.setState({hasStarted: true})
        } else if (this.state.currentIndex+1==this.props.num) {
            alert('모든 숫자가 한번씩 나왔습니다. 종료!')
            await this.onClick()
        } else {
                const target = this.state.currentIndex + 1
                this.setState({currentIndex: target})
            }
        }
    render() {
        const {arr} = this.props
        const {currentIndex, hasStarted} = this.state
        return (
            <Fragment>
                <div>
                    <div className="Aligner" align="center">
                        <div id="PickArea" className="Aligner-item PickArea">
                            {hasStarted ? (
                                arr[currentIndex]
                            ) : (
                                '버튼을 눌러 시작'
                            )}
                            <br/> <br/>
                        </div>
                        <div className="Aligner-item">
                            <Button
                                size={ButtonSizes.SMALL}
                                label="뽑기"
                                onClickHandler={this.pick}
                                type={ButtonTypes.PRIMARY}
                            />
                        </div>
                    </div>
                    <div id="RightDown" className="Aligner-item" align="center">
                        <Button
                            size={ButtonSizes.SMALL}
                            label="다시하기"
                            onClickHandler={this.onClick}
                            type={ButtonTypes.PRIMARY}
                        />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default After