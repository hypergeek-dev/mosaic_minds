
const areaMapping = {
    'CI': 'Channel Islands Area',
    'CTV': 'Chiltern & Thames Valley Area',
    'CA': 'Cornwall Area',
    'DA': 'Devon Area',
    'DO': 'Dorset Area',
    'EMA': 'East Midlands Area',
    'ES': 'Essex Area',
    'FC': 'Free Counties Area',
    'GM': 'Greater Manchester Area',
    'HA': 'Hampshire Area',
    'KE': 'Kent Area',
    'L-EC': 'Lancashire - East & Central Area',
    'L-NE': 'London - North East Area',
    'L-NW': 'London - North West Area',
    'L-SE': 'London - South East Area',
    'L-SW': 'London - South West Area',
    'MEA': 'Merseyside Area',
    'NS': 'Norfolk & Suffolk Area',
    'NEE': 'North East England Area',
    'NW': 'NW England & N Wales Area',
    'S-EC': 'Scotland - East Coast Area',
    'S-EL': 'Scotland - Edinburgh & Lothians Area',
    'S-GW': 'Scotland - Glasgow & West Coast Area',
    'S-WL': 'Scotland - West Lothian Area',
    'SWA': 'South Wales Area',
    'SU': 'Surrey Area',
    'SX': 'Sussex Area',
    'HIG': 'The Highlands & Islands Groups',
    'TS': 'The Shires Area',
    'UK-FAR': 'UK Farsi Groups Area',
    'WC': 'West Country Area',
    'WM': 'West Midlands Area',
    'WY': 'West Yorkshire',
    'YH': 'Yorkshire & Humberside Area',
  
  };
  

  export const getFullAreaName = (areaInitials) => {
    return areaMapping[areaInitials] || "Unknown Area";
  };
  
  export const formatMeetingTimeRange = (startTimeString, endTimeString) => {
    const formatTime = (timeString) => {
      if (timeString && timeString.includes(":")) {
        const [hours, minutes] = timeString.split(":");
        const time = new Date();
        time.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);
  
        let formattedHours = time.getHours();
        const ampm = formattedHours >= 12 ? 'PM' : 'AM';
        formattedHours = formattedHours % 12;
        formattedHours = formattedHours ? formattedHours : 12; 
        const formattedMinutes = time.getMinutes().toString().padStart(2, '0');
  
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
      } else {
        return "Invalid Time";
      }
    };
  
    return `${formatTime(startTimeString)} - ${formatTime(endTimeString)}`;
  };