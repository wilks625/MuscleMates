import React from 'react'
import Activity from '../Activity'

const Activities = ({ activities }) => {
    return (
        <div> 
            {activities? (
                activities.map((activity) => (
                    <Activity 
                    key={activity}
                    activity={activity}
                    />
                ))
            ) : (
                <p>No Activities yet, edit your profile to add things you like!</p>
            )
            }
        </div>
    )
}

export default Activities