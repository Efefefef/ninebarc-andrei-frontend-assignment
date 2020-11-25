export const STEPS = {
  '1' : {
    question: 'How much time are you planning on staying in the city?',
    answers: [
      '1 day',
      '2-4 days',
      '5-17 days',
      'longer'
    ]
  },
  '2': {
    question: 'How many rides do you expect per day?',
    answers: [
      '1',
      '2',
      '3',
      'more'
    ]
  },
  '3': {
    question: 'Where do you plan to ride?',
    answers: [
      'Just short rides ( 3 U/S-bahn stops or 6 bus/tram stops )',
      'Inside the city ( AB area )',
      'From-to outside the city ( ABC area )'
    ]
  }
}

export const RECOMMENDATIONS_MAPPING = {
  "1-1-1": "Short trip",
  "1-1-2": "Single trip AB",
  "1-1-3": "Single trip ABC",
  "1-2-1": "Short trip",
  "1-2-2": "Single trip AB",
  "1-2-3": "Single trip ABC",
  "1-3-1": "Short trip",
  "1-3-2": "Single trip AB",
  "1-3-3": "Single trip ABC",
  "1-4-1": "4-short trips",
  "1-4-2": "Day AB",
  "1-4-3": "Day ABC",
  "2-1-1": "4-short trips",
  "2-1-2": "4-single trip AB",
  "2-1-3": "4-single trip ABC",
  "2-2-1": "4-short trips",
  "2-2-2": "4-single trip AB",
  "2-2-3": "4-single trip ABC",
  "2-3-1": "4-short trips",
  "2-3-2": "4-single trip AB",
  "2-3-3": "4-single trip ABC",
  "2-4-1": "4-short trips or Day",
  "2-4-2": "Day AB",
  "2-4-3": "Day ABC",
  "3-1-1": "4-short trips",
  "3-1-2": "4-single trip AB",
  "3-1-3": "4-single trip ABC",
  "3-2-1": "4-short trips",
  "3-2-2": "4-single trip AB",
  "3-2-3": "4-single trip ABC",
  "3-3-1": "4-short trips or Week",
  "3-3-2": "Week AB",
  "3-3-3": "Week ABC",
  "3-4-1": "4-short trips or Week",
  "3-4-2": "Week AB",
  "3-4-3": "Week ABC",
  "4-1-1": "4-short trips",
  "4-1-2": "4-single trip AB",
  "4-1-3": "4-single trip ABC",
  "4-2-1": "4-short trips",
  "4-2-2": "4-single trip AB",
  "4-2-3": "4-single trip ABC",
  "4-3-1": "4-short trips or Month",
  "4-3-2": "Month AB",
  "4-3-3": "Month ABC",
  "4-4-1": "4-short trips or Month",
  "4-4-2": "Month AB",
  "4-4-3": "Month ABC",
}
