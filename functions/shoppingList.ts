"use client"

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://ysuqojcslirmgqjloosn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzdXFvamNzbGlybWdxamxvb3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzNDA1NjgsImV4cCI6MjAxNTkxNjU2OH0.rNKSZRVsTuVaW2NkTAYaTOXmwCSLw2OK2XhnNRiqMDc'
)

export const addShoppinglistItem = (itemName: string) => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const { error } = await supabase
        .from('shopping list')
        .insert([{ item: itemName }])

      if (error) {
        console.log(error)
        reject(error)
      } else {
        resolve("success")
      }
    } catch (error) {
      console.log(error)
      reject(error)
    }
  });
}

export const removeShoppinglistItem = (itemName: string) => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const { error } = await supabase
        .from('shopping list')
        .delete()
        .eq('item', itemName)

      if (error) {
        console.log(error)
        reject(error)
      } else {
        resolve("success")
      }
    } catch (error) {
      console.log(error)
      reject(error)
    }
  });
}

export const clearShoppinglist = () => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const { error } = await supabase
        .from('shopping list')
        .delete()
        .neq('item', '')

      if (error) {
        console.log("error clearing the shopping list", error)
        reject(error)
      } else {
        resolve("success")
      }
    } catch (error) {
      console.log(error)
      reject(error)
    }
  });
}

export const getShoppinglistItems = () => {
  return new Promise<string[]>(async (resolve, reject) => {
    try {
      const { data, error } = await supabase
        .from('shopping list')
        .select('*')

      if (error) {
        console.log(error)
        reject(error)
      }
      if (data) {
        const items = data.map((element) => element.item)
        resolve(items)
      }

    } catch (error) {
      console.log(error)
      reject(error)
    }
  });
}