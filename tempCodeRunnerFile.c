#include<stdio.h>
#include<stdlib.h>
#define MAX 10
typedef struct node{
    int data;
    struct node *link;
}NODE;

NODE* insert_rear(int key, NODE *root)
{
    NODE *temp = malloc(sizeof(NODE));
    temp->data = key;
    temp->link = NULL;
    
    if (root == NULL) {
        return temp;
    }
    
    NODE *curr = root;
    while (curr->link != NULL)
    {
        curr = curr->link;
    }
    curr->link = temp;
    return root;
}

void insert(int key, NODE *a[])
{
    int index = key % MAX;
    a[index] = insert_rear(key, a[index]);
}

int main()
{
    NODE* a[MAX];
    int ch, key;
    for(int i=0; i<MAX; i++)
    {
        a[i] = NULL;
    }
    while(1)
    {
        printf("1.insert\n2.search\n3.delete\n4.display\n");
        printf("Enter your choice\n");
        scanf("%d", &ch);
        switch(ch)
        {
            case 1:
                printf("Enter the key\n");
                scanf("%d", &key);
                insert(key, a);
                break;
        }
    }
}