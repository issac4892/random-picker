import React, {Fragment} from "react";
import './style.css'

import {ButtonTypes, ButtonSizes} from "./buttonTypes";

import Button from "./Button";

let num = 0;

class Before extends React.Component {
    onChange = async (e) => {
        if (e.target.value > 0) {
            this.props.change(e.target.value)
            num = e.target.value
        } else {

            alert("0보다 큰 수를 입력해 주세요!")
        }
    }

    /* 고마워요 스택오버플로우! */
    shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    rand = async () => {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            arr[i - 1] = i;
        }
        this.shuffle(arr)
        this.props.changearr(arr)
        this.props.done()
    }

    render() {
        return (
            <Fragment>
                <div>
                    <div className="Aligner-item Aligner">
                        <input
                            type="number"
                            placeholder="사람 수"
                            name="사람 수"
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="Aligner Aligner-item">
                        <br/><br/>
                        <Button
                            size={ButtonSizes.SMALL}
                            label="시작"
                            onClickHandler={this.rand}
                            type={ButtonTypes.PRIMARY}
                        />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Before