const API_URL = 'http://localhost:5000/api';

const createBaby = async (babyData) => {
  try {
    const response = await fetch(`${API_URL}/baby`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(babyData),
    });

    if (!response.ok) {
      throw new Error('Failed to create baby');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating baby:', error);
    throw error;
  }
};

const babyService = {
  createBaby,
};

export default babyService;
