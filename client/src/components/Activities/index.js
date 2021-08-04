import React from 'react'
import Activity from '../Activity'

const Activities = ({ activities }) => {
    const checkActivities = activities === [];

    return (
        <div> 
            {checkActivities? (
                <p>No Activities yet, edit your profile to add things you like!</p>
            ) : (
                activities.map((activity) => (
                    <Activity 
                    key={activity}
                    activity={activity}
                    />
                ))
            )
                }
        </div>
    )
}

export default Activities