import { api } from '@/lib/axios'

export interface registerRestaurantBody {
    email: string
    description: string
    managerName: string
    phone: string
    restaurantName: string
}

export async function registerRestaurant({ email, description, managerName, phone, restaurantName }: registerRestaurantBody) {
    await api.post('/restaurants', { email, description, managerName, phone, restaurantName })
}