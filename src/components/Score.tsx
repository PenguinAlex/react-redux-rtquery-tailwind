import React, {FC} from 'react';
interface ScoreProps{
    score: number
}
const Score:FC<ScoreProps> = ({score}) => {
    return (
        <div>
            {score}
        </div>
    );
};

export default Score;