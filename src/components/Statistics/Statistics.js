import PropTypes from 'prop-types';
import s from './statistics.module.css'

export default function Statistics({title, stats}) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.statList}>
                {stats.map(data => {
                    return (
                        <li className={s.item} key={data.id} style={{backgroundColor: randomBgColor()}}>
                            <span className={s.label}>{data.label}</span>
                            <span className={s.percentage}>{data.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    ) 
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}

function randomBgColor() {
  return  `rgb(${Math.floor(Math.random() * (255 - 0 + 1) + 0)}, ${Math.floor(Math.random() * (255 - 0 + 1) + 0)}, ${Math.floor(Math.random() * (255 - 0 + 1) + 0)})`
}