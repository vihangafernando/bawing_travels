import type { Review } from "./types";

// Mock data for reviews since we don't have a real backend
const mockReviews: Review[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    rating: 5,
    comment:
      "Our trip to Sri Lanka was absolutely amazing! The itinerary was perfectly planned, and our guide was knowledgeable and friendly. We saw so many beautiful places and had unforgettable experiences.",
    date: "March 15, 2023",
    location: "United States",
  },
  {
    id: "2",
    name: "David Chen",
    email: "david@example.com",
    rating: 4,
    comment:
      "Great experience overall. The cultural tour was very informative and we loved the wildlife safari. The only suggestion would be to have more free time in some locations.",
    date: "January 22, 2023",
    location: "Canada",
  },
  {
    id: "3",
    name: "Emma Wilson",
    email: "emma@example.com",
    rating: 5,
    comment:
      "Bawing Travels exceeded our expectations! From the moment we arrived until our departure, everything was handled professionally. The accommodations were excellent and the tour guides were exceptional.",
    date: "February 8, 2023",
    location: "Australia",
  },
];

// Function to get reviews
export async function getReviews(): Promise<Review[]> {
  // In a real application, this would fetch from an API
  // return axios.get('/reviews').then(response => response.data);

  // For demo purposes, we'll return mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockReviews);
    }, 1000);
  });
}

// Function to submit a review
export async function submitReview(reviewData: {
  name: string;
  email: string;
  rating: number;
  comment: string;
}): Promise<void> {
  // In a real application, this would post to an API
  // return axios.post('/reviews', reviewData);

  // For demo purposes, we'll simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Review submitted:", reviewData);
      resolve();
    }, 1500);
  });
}

// Function to submit contact form
export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  selectedPackage: string;
  subject: string;
  message: string;
}): Promise<void> {
  // In a real application, this would post to an API
  // return axios.post('/contact', formData);

  // For demo purposes, we'll simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      resolve();
    }, 1500);
  });
}

// Function to submit custom tour request
export async function submitCustomTour(formData: {
  name: string;
  email: string;
  phone: string;
  startDate: string;
  destinations: string[];
  message: string;
}): Promise<void> {
  // In a real application, this would post to an API
  // return axios.post('/customtour', formData);

  // For demo purposes, we'll simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Custom tour request submitted:", formData);
      resolve();
    }, 1500);
  });
}

// In a real application, these functions would use Axios to make actual API calls
// Example of how it would be implemented:

/*
export async function getReviews(): Promise<Review[]> {
  try {
    const response = await axios.get('/reviews');
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
}

export async function submitReview(reviewData: {
  name: string;
  email: string;
  rating: number;
  comment: string;
}): Promise<void> {
  try {
    await axios.post('/reviews', reviewData);
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
}

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  selectedPackage: string;
  subject: string;
  message: string;
}): Promise<void> {
  try {
    await axios.post('/contact', formData);
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

export async function submitCustomTour(formData: {
  name: string;
  email: string;
  phone: string;
  startDate: string;
  destinations: string[];
  message: string;
}): Promise<void> {
  try {
    await axios.post('/customtour', formData);
  } catch (error) {
    console.error('Error submitting custom tour request:', error);
    throw error;
  }
}
*/
