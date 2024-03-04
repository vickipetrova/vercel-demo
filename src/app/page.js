"use client";

import { useState } from 'react';
import Greeting from '../../components/Greeting';

export default function Home() {
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');
  const [tablePreference, setTablePreference] = useState('');
  const [specialOccasion, setSpecialOccasion] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');

  return (
    <div>
      <div>
        <h1>Welcome to Our Virtual Restaurant!</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="What's your name?"
        />
        <Greeting name={name} />
      </div>

      {name && (
        <>
          <div>
            <h2>Do you have a table preference?</h2>
            <input
              type="text"
              value={tablePreference}
              onChange={(e) => setTablePreference(e.target.value)}
              placeholder="Near the window, quiet corner..."
            />
            {tablePreference && <p>Got it, we'll prepare a {tablePreference} for you, {name}.</p>}
          </div>

          <div>
            <h2>Is this visit for a special occasion?</h2>
            <input
              type="text"
              value={specialOccasion}
              onChange={(e) => setSpecialOccasion(e.target.value)}
              placeholder="Birthday, Anniversary..."
            />
            {specialOccasion && <p>Wonderful! We'll make your {specialOccasion} extra special.</p>}
          </div>

          <div>
            <h2>Any dietary restrictions we should know about?</h2>
            <input
              type="text"
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}
              placeholder="Allergies, vegetarian, etc."
            />
            {dietaryRestrictions && <p>We'll note your dietary restrictions: {dietaryRestrictions}.</p>}
          </div>
        </>
      )}

      {name && (
        <>
          <div>
            <h2>What's your favorite food?</h2>
            <input
              type="text"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              placeholder="Enter your favorite food"
            />
            {food && <p>Great choice! We love {food} here too.</p>}
          </div>

          <div>
            <h2>What's your favorite drink?</h2>
            <input
              type="text"
              value={drink}
              onChange={(e) => setDrink(e.target.value)}
              placeholder="Enter your favorite drink"
            />
            {drink && <p>{drink} is a perfect choice for staying refreshed!</p>}
          </div>
        </>
      )}

      {name && tablePreference && specialOccasion && dietaryRestrictions && food && drink && (
        <div>
          <h2>Summary of your visit:</h2>
          <p>Name: {name}</p>
          <p>Table Preference: {tablePreference}</p>
          <p>Special Occasion: {specialOccasion}</p>
          <p>Dietary Restrictions: {dietaryRestrictions}</p>
          <p>Favorite Food: {food}</p>
          <p>Favorite Drink: {drink}</p>
          <p>Thank you, {name}, for choosing us for your {specialOccasion} celebration. We're looking forward to welcoming you!</p>
        </div>
      )}
    </div>
  );
}
