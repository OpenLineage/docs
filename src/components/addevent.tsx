import React from "react"

//export default function () {
//     return (
//         <div style={{width: "100%", height:"500px"}}
//             className="ae-emd-cal-events"
//             data-calendar="pP575215"
//             data-lbl-upcoming="Upcoming events"
//             data-lbl-subscribe="Subscribe"
//             data-no-events="No events found.."
//             data-lbl-readmore="Read more"
//             data-include-atc="true"
//             data-include-stc="true"
//             data-include-moupcpicker="true"
//             data-include-location="false"
//             data-include-timezone="false"
//             data-include-organizer="false"
//             data-include-countdown="false"
//             data-include-description="false"
//             data-include-timezone-select="true"
//             data-default-view="upcoming"
//             data-stayonpage="false"
//             data-datetime-format="1"
//             data-datetime-language="en_US"
//             data-events-max="20" data-description-length="brief">
//         </div>
//     )
// }

export default function () {
    return (
        <>
        <div style={{maxWidth: "400px", height:"500px"}}>
            <iframe
                src={"https://www.addevent.com/calendar/pP575215/embed-events/?frame=true&include_atc=true&include_stc=true&include_desc=false&include_timezone=false&include_timezone_select=true&include_location=false&include_organizer=false&include_countdown=false&default_view=upcoming&stayonpage=false&events_max=20&include_monthpick=true&datetimeformat=1&datelanguage=en_US"}
                frameBorder="false"
                allowTransparency
                className="ae-emd-list-frame"
                scrolling="no"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "0px",
                    overflow: "hidden",
                    visibility: "visible",
                    margin: "0px",
                    padding: "0px",
                    background: "transparent",
                    display: "block"
                }}
            />
        </div>
        <script type="text/javascript" src="https://cdn.addevent.com/libs/cal/js/cal.events.embed.t3.init.js" />
        </>
    )
}