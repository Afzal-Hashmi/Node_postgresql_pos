PGDMP  :            	        |            POS     16.3 (Ubuntu 16.3-1.pgdg22.04+1)     16.3 (Ubuntu 16.3-1.pgdg22.04+1)     3           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            4           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            5           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            6           1262    24576    POS    DATABASE     q   CREATE DATABASE "POS" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE "POS";
                postgres    false            �            1259    24580    orders    TABLE     �   CREATE TABLE public.orders (
    orderdate date DEFAULT CURRENT_DATE NOT NULL,
    orderdetails character varying(255) NOT NULL,
    orderquantity double precision NOT NULL,
    customer_no character varying(12),
    orderid integer NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    24586    orders_orderid_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_orderid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.orders_orderid_seq;
       public          postgres    false    216            7           0    0    orders_orderid_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.orders_orderid_seq OWNED BY public.orders.orderid;
          public          postgres    false    217            �            1259    24577    product_prices    TABLE     j   CREATE TABLE public.product_prices (
    product_name character varying(255),
    price_per_kg integer
);
 "   DROP TABLE public.product_prices;
       public         heap    postgres    false            �            1259    24602    users    TABLE     h   CREATE TABLE public.users (
    username character varying(255),
    password character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �           2604    24587    orders orderid    DEFAULT     p   ALTER TABLE ONLY public.orders ALTER COLUMN orderid SET DEFAULT nextval('public.orders_orderid_seq'::regclass);
 =   ALTER TABLE public.orders ALTER COLUMN orderid DROP DEFAULT;
       public          postgres    false    217    216            .          0    24580    orders 
   TABLE DATA           ^   COPY public.orders (orderdate, orderdetails, orderquantity, customer_no, orderid) FROM stdin;
    public          postgres    false    216          -          0    24577    product_prices 
   TABLE DATA           D   COPY public.product_prices (product_name, price_per_kg) FROM stdin;
    public          postgres    false    215   �       0          0    24602    users 
   TABLE DATA           3   COPY public.users (username, password) FROM stdin;
    public          postgres    false    218   �       8           0    0    orders_orderid_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.orders_orderid_seq', 58, true);
          public          postgres    false    217            �           2606    24589    orders orders_orderid_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_orderid_key UNIQUE (orderid);
 C   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_orderid_key;
       public            postgres    false    216            .   z   x�e�1�0Eg��@Q��I3s ��,V�U�A%�o6�X���,����p��L�0s)yMo�a����uU1y�*+0��F��ȴ��f�l�\�>�c{�������E�j�_���~A��o+%      -     x�m�AN�0E��)r�i��,1HH��՚I�4��D��8���������-���.��buSU�6t����{��*"�gރ$�bw���o`���`�-�����	�ԑ�����&8T�A�}��I�.�r5"�Q���/���vs�焅�X?�.	����7�9V��aFg�-�H�[�%����y�Ԅӄ���i��!��oaaur�@��q��/�t��0
���k���} �Q���)�.�>/��?�E��      0   Q   x��H,����T1JR14P),p2�p.54�62q��t
(��J��2.�rv6��͋/,w�(�0-0�r��s������� 1�     