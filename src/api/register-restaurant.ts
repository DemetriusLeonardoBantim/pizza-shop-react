import { api } from '@/lib/axios'

export interface registerRestaurantBody {
    email: string
    description: string
    managerName: string
    phone: string
}

export async function registerRestaurant({ email, description, managerName, phone }: registerRestaurantBody) {
    await api.post('/restaurants', { email, description, managerName, phone })
}